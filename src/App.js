import useUser from './Hooks/UserHook';
import { SearchForm } from './Components/SearchForm';
import { UserCard } from './Components/UserCard';

import './App.css';

function App() {

  const { user, isLoading, searchUser } = useUser();

  return (
    <div className="App flex justify-center gap-9 flex-wrap items-center min-h-screen bg-black text-white">
      <SearchForm searchUser={searchUser} />
      <UserCard user={user} isLoading={isLoading}/>
    </div>
  );
}

export default App;
