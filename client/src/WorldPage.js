const WorldPage = ({ currUser, posts, comments }) => {

    const listComments = comments.map((comment) => {
        return (
            <div key={nation.id}>
                {nation.nation_name} located in the {nation.nation_location}
            </div>
        )
    })
    
    return (
        <div>
            <h1>WorldPage!!</h1>
            <div>
                <h2>{currUser.username}</h2>
                <h3>{currUser.email}</h3>
                {listComments}
                <button>
                    <span role="img" aria-label="edit">
                        + ADD
                    </span>
                </button>
                <button>
                    <span role="img" aria-label="delete">
                        - REMOVE
                    </span>
                </button>
            </div>
        </div>
    );
}

export default WorldPage;