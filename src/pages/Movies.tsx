import data from "../MovieData.json"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
// import { useState } from "react"
import MainLayout from "../layout/MainLayout"

const movies = data.MovieData

function MovieList(){

    return(
    <MainLayout>
        <div>Joel Hilton's Movie Collection</div>
        <div>
            <table className="table table-dark table-hover table-striped">
                <thead>
                    <tr>
                        <th >Title</th>
                        <th >Director</th>
                        <th >Category</th>
                        <th >Year</th>
                        <th >Rating</th>
                        <th >Edited</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((m)=>(
                        
                        <tr>
                            <td>{m.Title}</td>
                            <td>{m.Director}</td>
                            <td>{m.Category}</td>
                            <td>{m.Year}</td>
                            <td>{m.Rating}</td>
                            <td>{m.Edited}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </MainLayout>

        )
}
export default MovieList