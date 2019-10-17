import React from 'react'

export default function TeamItem ({name, src, members, i}) {

  let img = (
    <div className={"col-md-6" + (i & 1 ? " text-left" : " text-right")}>
      <img src={require("./img/" + src)} alt={name} className="team-img"></img>
    </div>
  );

  let memberList = (
    <div className={"col-md-6" + (i & 1 ? " text-right" : "")}>
      <h1 className="team-name">{name}</h1>
      <ul className="member-list">
        {
          members.map((curr, i) => <li key={i}>{curr}</li>)
        }
      </ul>
    </div>
  );

  return (
    <div className="row team">
      {i & 1 ? memberList : img}
      {i & 1 ? img : memberList}
    </div>
  );
}