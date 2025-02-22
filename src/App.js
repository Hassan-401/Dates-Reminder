import { person } from "./data";
import Datesnumber from "./component/Datesnumber";
import { Container } from "react-bootstrap";
import Dateslist from "./component/Dateslist";
import DatesAction from "./component/Datesaction";
import { useEffect, useState } from "react";
function App() {
  const [persondata, setpersondata] = useState(person);
  const ondelete = () => {
    setpersondata([]);
  };
  const onview = () => {
    setpersondata(person);
  };
  useEffect(() => {
    setpersondata([]);
  }, []);
  return (
    <div className="color-body font py-5">
      <Container>
        <Datesnumber person={persondata} />
        <Dateslist person={persondata} />
        <DatesAction ondeletedata={ondelete} onviewdata={onview} />
      </Container>
    </div>
  );
}

export default App;
