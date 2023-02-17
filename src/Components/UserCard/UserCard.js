const UserCard = (props) => {
  if (props.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {props.user ? (
        <div className="border-yellow-500 border-4 rounded-md text-center p-7">
          <img
            className="w-52 h-54 m-auto bg-slate-900 rounded-full"
            src={props.user.avatar_url}
            alt={props.user.login}
          />
          <div className="my-5">
            <p>{props.user.name}</p>
            <small className="text-gray-400">{props.user.login}</small>
            <small className="block my-2">{props.user.location}</small>
          </div>
          <a
            className="bg-yellow-500 text-black text-sm py-1 px-2 font-semibold rounded-sm hover:bg-yellow-600 transition-all cursor-pointer"
            href={props.user.html_url}
            target="_blank"
          >
            Visit profile
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserCard;
