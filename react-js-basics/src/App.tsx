import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && <Alert>Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        Bye!
      </Button>
    </div>
  );
}

export default App;
