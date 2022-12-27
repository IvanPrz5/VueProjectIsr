import axios from "axios";

axios.created({
    axios.get("http://localhost:8081/Isr/2").then((result) => {
        console.log(result.data);
      })
});