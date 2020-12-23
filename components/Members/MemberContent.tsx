import React, { useEffect, useState, useContext } from "react";
import Icons from "../icons/icons";
import styled from "styled-components";
import Link from "next/link";
import Fuse from "fuse.js";
import Masonry from "react-masonry-css";
import Members from "../utils/Members.json";
import { GlobalStateContext } from "../../Context/GlobalState";
//import { API_URL } from "../utils/imageToUrl";

const StyledMembers = styled.section`
  .title {
    text-align: center;
    margin: 0 auto;
    max-width: 500px;
    margin-bottom: 50px;

    h1 {
      line-height: 40px;
    }
  }

  .search {
    text-align: right;
    margin-bottom: 50px;
    transition: var(--transition);

    input {
      outline-style: none;
      font-size: var(--fz-sm);
      font-weight: lighter;
      height: 35px;
      width: 300px;
      color: #af9e9e;
      padding: 0px 18px 0;
      border: 1px solid #f1ecec;
      border-radius: 3px;

      &:hover,
      &:focus {
        border: 1px solid #aa9f9f;
      }
    }
  }

  .card {
    overflow: hidden;
    padding: 20px 21px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: var(--border-radius);
    transition: var(--transition);

    &:hover,
    &:focus {
      transform: translateY(-10px);
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    img {
      object-fit: cover;
      width: 120px;
      height: 120px;
      margin-bottom: 15px;
      border-radius: 50%;
    }

    .icons {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      svg {
        margin: 0 8px 0;
        width: 26px;
        height: 26px;
        fill: #26343f;

        &:hover,
        &:focus {
          fill: #7a8c99;
        }
      }
    }

    .line-orientation {
      width: 100%;
      padding: 20px 0 0;
      text-align: center;
      line-height: 0.1rem;
      margin: 10px 0 20px;
    }

    .line-orientation span {
      padding: 0 10px;
    }

    .member-name {
      display: block;
      margin-bottom: 15px;
      font-size: 17px;
      line-height: 25px;
    }

    .card-content {
      color: var(--dirty-white);
      font-weight: lighter;
      font-size: 13px;

      span {
        display: block;
        line-height: 17px;
        margin-bottom: 8px;
      }
    }
  }
`;

const MemberContent: React.FC = () => {
  const { navbar } = useContext(GlobalStateContext);
  //const [membersInfo, setMembersInfo] = useState([]);
  const [search, setSearch] = useState("");

  // const onSearch = () => {
  //   const info = membersInfo.filter((data: any) =>
  //     Object.keys(data).some((key: any) =>
  //       String(data[key]).toLocaleLowerCase().includes(search.toLowerCase())
  //     )
  //   );

  //   setMembersInfo(info);
  // };

  //useEffect(onSearch, [search]);

  // const members = () => {
  //   (async () => {
  //     await fetch(`${API_URL}/members`)
  //       .then((response) => {
  //         if (response.status === 404) {
  //           console.log("error 404");
  //         }

  //         if (response.status === 403) {
  //           console.log("error 403");
  //         }

  //         return response.json();
  //       })
  //       .then((data: any) => {
  //         setMembersInfo(data);
  //       })
  //       .catch((error: any) => {
  //         console.log(error.message);
  //       });
  //   })();
  // };

  //const renderSearch: boolean = search !== "";

  //useEffect(members, [renderSearch]);

  const options = {
    includeScore: true,
    keys: ["name"],
  };

  const fuse = new Fuse(Members, options);
  const searchInformation: any = fuse.search(search);
  const membersSlice = search
    ? searchInformation.map((info: any) => info.item)
    : Members;

  const social = ["Facebook", "Instagram", "Twitter"];

  const responsiveBreakPoint = {
    default: 4,
    1080: 3,
    745: 2,
    500: 1,
  };
  return (
    <StyledMembers>
      <div className="title">
        <h1>Get to know our LH Leaders &amp; Members</h1>
      </div>
      <div className="search">
        <input
          value={search}
          name="search"
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          placeholder="Search..."
        />
      </div>
      <Masonry
        breakpointCols={responsiveBreakPoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {membersSlice.map((info: any, index: number) => (
          <div className="card" key={index}>
            <div>
              <img src={info.image} alt="" />
            </div>
            <span className="member-name">{info.name}</span>
            <div className="card-content">
              <span>{info.course}</span>
              <span>{info.school}</span>
              <span>{info.status}</span>
            </div>
            <div
              className="line-orientation"
              style={{
                borderBottom: `1px solid ${navbar ? "#383f41" : " #e4dbdb"}`,
              }}
            >
              <span
                style={{
                  background: navbar ? "#181A1B" : "#fff",
                  color: "#6C7983",
                  fontWeight: "lighter",
                  fontSize: "13px",
                }}
              >
                {info.type}
              </span>
            </div>
            <div className="icons">
              {social.map((social: any, index: number) => (
                <Link href={info.facebook} key={index}>
                  <a>
                    <Icons name={social} />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </Masonry>
    </StyledMembers>
  );
};

export default MemberContent;
