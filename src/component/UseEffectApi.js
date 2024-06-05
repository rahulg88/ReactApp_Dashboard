import React, { useEffect, useState } from "react";

const UseEffectApi = () => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");

    setUser(await response.json());
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="container-fluid mt-5 d-flex align-items-center justify-content-center">
        <h1>bootstrap </h1>
      </div>
      <div className="container-fluid  ">
        <div className="row text-center">
          {user.map((curElem) => {
            return (
              <>
                <div className="col-10 col-md-4 mt-5">
                  <div className="card p-2">
                    <div className="d-flex align-items-center ">
                      <div className="image">
                        <img
                          src={curElem.avatar_url}
                          className="rounded"
                          width="155"
                          alt=""
                        />
                      </div>
                      <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft">{curElem.login}</h4>
                        <span className="textLeft">Web Developer</span>
                      </div>
                      <div className="p-2 m-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column ">
                          <span className="articles m-1">Articles</span>
                          <span className="number1">38</span>
                        </div>
                        <div className="d-flex flex-column ">
                          <span className="followers m-1">
                            {user.followers_url}
                          </span>
                          <span className="number2">38</span>
                        </div>
                        <div className="d-flex flex-column ">
                          <span className="rating p-1">Rating</span>
                          <span className="number3">38</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffectApi;
