import React from "react";
import { useState, useEffect } from "react";
import "../About/makerdisp.css";

function Makers() {
  const [data0, setdata0] = useState(null);
  const [data1, setdata1] = useState(null);
  const [data2, setdata2] = useState(null);
  const [data3, setdata3] = useState(null);
  const [data4, setdata4] = useState(null);

  const [loading0, setloading0] = useState(true);
  const [loading1, setloading1] = useState(true);
  const [loading2, setloading2] = useState(true);
  const [loading3, setloading3] = useState(true);
  const [loading4, setloading4] = useState(true);

  useEffect(() => {
    getDevelopers();

    async function getDevelopers() {
      const SouravJangral = await fetch(
        "https://api.github.com/users/nickeeeeey"
      ).finally( () => {setloading0(false)});
      const SarveshHadole = await fetch(
        "https://api.github.com/users/Sarvesh30112002"
      ).finally( () => {setloading1(false)});
      const SharvariBawane = await fetch(
        "https://api.github.com/users/SharvariBawane"
      ).finally( () => {setloading2(false)});
      const AnushkaPopalghat = await fetch(
        "https://api.github.com/users/anushkapopalghat"
      ).finally( () => {setloading3(false)});
      const RushikeshUnde = await fetch(
        "https://api.github.com/users/unde"
      ).finally( () => {setloading4(false)});

      var data0 = await SouravJangral.json();
      var data1 = await SarveshHadole.json();
      var data2 = await SharvariBawane.json();
      var data3 = await AnushkaPopalghat.json();
      var data4 = await RushikeshUnde.json();

      setdata0(data0);
      setdata1(data1);
      setdata2(data2);
      setdata3(data3);
      setdata4(data4);
    }
  }, []);

  if(loading0) return (<div style={{textAlign: "center"}}>loading...</div>);
  if(loading1) return (<div style={{textAlign: "center"}}>loading...</div>);
  if(loading2) return (<div style={{textAlign: "center"}}>loading...</div>);
  if(loading3) return (<div style={{textAlign: "center"}}>loading...</div>);
  if(loading4) return (<div style={{textAlign: "center"}}>loading...</div>);

  return (
    <div className="container">
      <h2 style={{marginTop: "2%"}} className="teamhead"><b>The developers of eMergeCampus</b></h2>
      <h6 style={{textAlign: "center"}}>This page is being fetched from GitHub</h6>
      <section className="teammem">
        <div className="teammemcont">
          {data1 && (
            <div className="teamflex columnrev">
              <div style={{ width: "60%" }} className="passiontext">
                <p>{data1.bio}</p>
              </div>
              <div className="teammemcard">
                <img
                  src={data1.avatar_url}

                  
                />

                <h3 style={{ marginBottom: "2%" }}>
                  <strong>{data1.name}</strong>
                </h3>
                <div className="contacts">
                  <a href={data1.html_url} target="_blank" class="margright">
                    <i class="fab fa-2x fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sarvesh-hadole-816a56230/"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="teammem">
        <div className="teammemcont">
          {data0 && (
            <div className="teamflex ">
              <div className="teammemcard">
                <img
                  src={data0.avatar_url}
                  
                />

                <h3 style={{ marginBottom: "2%" }}>
                  <strong>{data0.name}</strong>
                </h3>
                <div className="contacts">
                  <a href={data0.html_url} target="_blank" class="margright">
                    <i class="fab fa-2x fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sourav-jangral-1a118422b/"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div style={{ width: "60%" }} className="passiontext">
                <p>{data0.bio}</p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="teammem">
        <div className="teammemcont">
          {data2 && (
            <div className="teamflex columnrev">
              <div style={{ width: "60%" }} className="passiontext">
                <p>{data2.bio}</p>
              </div>
              <div className="teammemcard">
                <img
                  src={data2.avatar_url}
                  
                />

                <h3 style={{ marginBottom: "2%" }}>
                  <strong>{data2.name}</strong>
                </h3>
                <div className="contacts">
                  <a href={data2.html_url} target="_blank" class="margright">
                    <i class="fab fa-2x fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sharvari-bawane-bab560231"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="teammem">
        <div className="teammemcont">
          {data3 && (
            <div className="teamflex ">
              <div className="teammemcard">
                <img
                  src={data3.avatar_url}
                  
                />
                <h3 style={{ marginBottom: "2%" }}>
                  <strong>{data3.name}</strong>
                </h3>
                <div className="contacts">
                  <a href={data3.html_url} target="_blank" class="margright">
                    <i class="fab fa-2x fa-github"></i>
                  </a>
                  <a
                    href="http://www.linkedin.com/in/anushka-popalghat-18541922a"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div style={{ width: "60%" }} className="passiontext">
                <p>{data3.bio}</p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="teammem">
        <div style={{ marginBottom: "5%" }} className="teammemcont">
          {data4 && (
            <div className="teamflex columnrev">
              <div style={{ width: "60%" }} className="passiontext">
                <p>{data4.bio}</p>
              </div>
              <div className="teammemcard">
                <img
                  src={data4.avatar_url}
                 
                />

                <h3 style={{ marginBottom: "2%" }}>
                  <strong>{data4.name}</strong>
                </h3>
                <div className="contacts">
                  <a href={data4.html_url} target="_blank" class="margright">
                    <i class="fab fa-2x fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rushikesh-unde-57a937234/"
                    target="_blank"
                  >
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Makers;
