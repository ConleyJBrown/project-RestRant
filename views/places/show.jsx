const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <div>
              <img src = {data.place.pic} alt = "image for restaurant" height = "400px" width = "400px"></img>
            </div>
            <div>
            <h2>Rating</h2>
            <p>Currently Unrated</p>
            </div>
            <div>
              <h2>Description</h2>
              <p>Located in {data.place.city}, {data.place.state}. Serves {data.place.cuisines} .</p>
            </div>
            <div>
              <h2>Comments</h2>
              <p>No comments yet</p>
            </div>
            <div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
               Edit
            </a>     
              <form method="POST" action= {`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>     
            </div>
          </main>
        </Def>
    )
}

module.exports = show
