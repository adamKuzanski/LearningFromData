using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using MovieRecommendationBackend.Interfaces;
using MovieRecommendationBackend.Models;
using MovieRecommendationBackend.Secrets;

namespace MovieRecommendationBackend.Data
{
    public class MovieRepository: IMovieRepository
    {

        private readonly string _connectionString;

        public MovieRepository()
        {
            this._connectionString = Connections.DbConnection;
        }


        public async Task<bool> AddUserRatings(UserFinalFeedback userFinalFeedback)
        {
            using (SqlConnection sqlCon = new SqlConnection(_connectionString))
            {
                Console.WriteLine(userFinalFeedback);
                // sqlCon.Open();
                // SqlCommand sqlCmd = new SqlCommand("UserAddOrEdit", sqlCon);
                // sqlCmd.CommandType = System.Data.CommandType.StoredProcedure;
                // sqlCmd.Parameters.AddWithValue("@ID", Convert.ToInt32(0));
                // sqlCmd.Parameters.AddWithValue("@Firstname", registerUser.Firstname.Trim());
                // sqlCmd.Parameters.AddWithValue("@Lastname", registerUser.Lastname.Trim());
                // sqlCmd.Parameters.AddWithValue("@Username", registerUser.Username.Trim());
                // sqlCmd.Parameters.AddWithValue("@Password", registerUser.Password.Trim());
                // sqlCmd.Parameters.AddWithValue("@Token", registerUser.Token.Trim());
                // var rowsAffected = sqlCmd.ExecuteNonQuery();
                //
                // if (rowsAffected > 0)
                //     return true;
                // else
                //     return false;
                return true;
            }
        }
    }
}
