import React, { useEffect, useState } from "react";

const useEventSource = (url) => {
  const [data, updateData] = useState(null);

  useEffect(() => {
    const source = new EventSource(url);

    source.onmessage = function logEvents(event) {
      console.log(event);
      updateData(JSON.parse(JSON.stringify(event.data)));
    };

    source.onopen = () => {
      console.log("open");
    };

    source.onerror = () => {
      console.log("erro");

      source.close();
    };
  }, [url]);

  return data;
};

function App() {
  const data = useEventSource("http://localhost:3005/users/sseconnect/stream");
  if (!data) {
    return <div> No Data yet </div>;
  }

  return <div>Response from server is {data}</div>;
}

export default App;
