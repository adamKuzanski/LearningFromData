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
            var user = userFinalFeedback.AuthenticationUser;
            var feadbacks = userFinalFeedback.MovieRatings;




            using (SqlConnection sqlCon = new SqlConnection(_connectionString))
            {
                Console.WriteLine(userFinalFeedback);
                sqlCon.Open();

                foreach (var feedback in feadbacks)
                {
                    SqlCommand sqlCmd = new SqlCommand("AddUserMovieRating", sqlCon);
                    sqlCmd.CommandType = System.Data.CommandType.StoredProcedure;
                    sqlCmd.Parameters.AddWithValue("@ID", Convert.ToInt32(0));
                    sqlCmd.Parameters.AddWithValue("@UserId", user.ID);
                    sqlCmd.Parameters.AddWithValue("@MovieId", feedback.MovieId);
                    sqlCmd.Parameters.AddWithValue("@Rating", Convert.ToInt32(feedback.MovieScore));
                    sqlCmd.Parameters.AddWithValue("@MovieUnwatched", Convert.ToInt32(feedback.MovieUnWatched));
                    var rowsAffected = sqlCmd.ExecuteNonQuery();

                    if (rowsAffected <= 0)
                        return false;
                }
            }

            return true;
        }
    }
}
