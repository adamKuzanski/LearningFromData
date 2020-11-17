using MovieRecommendationBackend.Interfaces;
using MovieRecommendationBackend.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using MovieRecommendationBackend.Secrets;

namespace MovieRecommendationBackend.Data
{
    public class UserRepository: IUserRepository
    {
        private readonly string _connectionString;

        public UserRepository()
        {
            this._connectionString = Connections.DbConnection;
        }

        public async Task<bool> AddNewUser(AuthenticationUser registerUser)
        {
            using (SqlConnection sqlCon = new SqlConnection(_connectionString))
            {
                sqlCon.Open();
                SqlCommand sqlCmd = new SqlCommand("UserAddOrEdit", sqlCon);
                sqlCmd.CommandType = System.Data.CommandType.StoredProcedure;
                sqlCmd.Parameters.AddWithValue("@ID", Convert.ToInt32(0));
                sqlCmd.Parameters.AddWithValue("@Firstname", registerUser.Firstname.Trim());
                sqlCmd.Parameters.AddWithValue("@Lastname", registerUser.Lastname.Trim());
                sqlCmd.Parameters.AddWithValue("@Username", registerUser.Username.Trim());
                sqlCmd.Parameters.AddWithValue("@Password", registerUser.Password.Trim());
                sqlCmd.Parameters.AddWithValue("@Token", registerUser.Token.Trim());
                var rowsAffected = sqlCmd.ExecuteNonQuery();

                if (rowsAffected > 0)
                    return true;
                else
                    return false;
            }
        }

        public async Task<AuthenticationUser> LoginUser (CredentialsUser credentialsUser)
        {
            using (SqlConnection sqlCon = new SqlConnection(_connectionString))
            {
                sqlCon.Open();

                SqlDataAdapter sqlAdapter = new SqlDataAdapter("UserViewByUsernameAndPassword", sqlCon);
                sqlAdapter.SelectCommand.CommandType = System.Data.CommandType.StoredProcedure;

                sqlAdapter.SelectCommand.Parameters.AddWithValue("@Username", credentialsUser.Username.Trim());
                sqlAdapter.SelectCommand.Parameters.AddWithValue("@Password", credentialsUser.Password.Trim());

                DataTable dataTable = new DataTable();

                int result;

                try
                {
                    result = sqlAdapter.Fill(dataTable);
                }
                catch (Exception)
                {
                    return null;
                }


                var finalUser = new AuthenticationUser();
                finalUser.Username = credentialsUser.Username;
                finalUser.Password = credentialsUser.Password;
                finalUser.ID = int.Parse(dataTable.Rows[0][0].ToString());
                finalUser.Firstname = dataTable.Rows[0][1].ToString();
                finalUser.Lastname = dataTable.Rows[0][2].ToString();
                finalUser.Token = dataTable.Rows[0][5].ToString();

                return finalUser;
            }
        }
    }
}
