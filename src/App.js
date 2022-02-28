import './App.css';
import { Authenticator } from "@aws-amplify/ui-react";

import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
              <div className="app">
                <h2>Welcome to the Party.</h2>
              <button onClick={signOut}>Sign out</button>
            </div>
      )}
    </Authenticator>
  );
}

export default App;



