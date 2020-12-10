import React, { useContext, useEffect, useState } from "react";
import { API_URL, fromImageToUrl } from "../components/utils/imageToUrl";
import { GlobalStateContext } from "../Context/GlobalState";
import HeaderLayout from "../components/HeaderLayout";
import { withRouter } from "next/router";
import { GlobalStyle } from "../styles";
import Link from "next/link";
import styled from "styled-components";
import { Clock } from "react-feather";
import Icons from "../components/icons/icons";
import Head from "next/head";
import { SubLayout, Event, DarkTheme } from "../components";

const StyledSlug = styled.section`
  display: flex;

  .events-time-location {
    display: flex;
    flex-direction: column;
    width: 40%;

    svg {
      margin-bottom: 75px;
      border-radius: 50%;
      background: var(--blue);
      padding: 15px 15px;
      width: 30px;
      height: 30px;
      box-shadow: 0 5px 10px var(--dark-blue);
    }

    .calendar {
      display: flex;

      .sub-content {
        display: block;
        margin: 0 25px;

        span {
          &:nth-child(1) {
            font-weight: bold;
          }

          &:nth-child(2) {
            margin-top: 10px;
            font-size: 18px;
            color: var(--dirty-white);
            display: block;
          }
        }
      }
    }

    .clock {
      display: flex;
      .sub-content {
        display: block;
        margin: 0 25px;

        span {
          &:nth-child(1) {
            font-weight: bold;
          }

          &:nth-child(2) {
            margin-top: 10px;
            font-size: 18px;
            color: var(--dirty-white);
            display: block;
          }
        }
      }
    }

    .location {
      display: flex;
      .sub-content {
        display: block;
        margin: 0 25px;

        span {
          &:nth-child(1) {
            font-weight: bold;
          }

          &:nth-child(2) {
            margin: 10px 0 3px;
            font-size: 18px;
            line-height: 23px;
            color: var(--dirty-white);
            display: block;
            max-width: 300px;
          }
        }

        a {
          cursor: pointer;
          font-size: 18px;
          color: var(--blue);
          text-decoration: none;
        }
      }
    }

    .cart {
      display: flex;
      .sub-content {
        display: block;
        margin: 0 25px;

        span {
          &:nth-child(1) {
            font-weight: bold;
          }

          &:nth-child(2) {
            margin: 10px 0 3px;
            font-size: 18px;
            line-height: 23px;
            color: var(--dirty-white);
            display: block;
            max-width: 300px;
          }

          &:nth-child(3) {
            cursor: pointer;
            font-size: 18px;
            color: var(--blue);
          }
        }
      }
    }
  }

  .events {
    h1 {
      font-size: 50px;
    }

    p {
      margin: 0 auto;
      line-height: 30px;
      max-width: 800px;
    }
  }
`;

const Events: React.FC = (props: any) => {
  const { navbar, dispatch2 } = useContext(GlobalStateContext);
  //console.log(props.router.query.id);

  const isDark = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.preventDefault();

    dispatch2({
      type: "isDark",
      payload: { isDark: !navbar },
    });
  };

  const [events, setEvents] = useState<any>(null);

  console.log(events);
  useEffect(() => {
    (async () => {
      await fetch(`${API_URL}/events/${props.router.query.id}`)
        .then((response: any) => {
          if (response.status === 404) {
            console.log("404 error");
          }

          if (response.status === 403) {
            console.log("403 forbidden");
          }

          return response.json();
        })
        .then((data: any) => {
          setEvents(data);
        })
        .catch((error: any) => {
          console.log(error.message);
        });
    })();

    return () => setEvents(null);
  }, [props.router.query.id]);

  return (
    <>
      {events !== null && (
        <SubLayout isDark={(event) => isDark(event)} state={navbar}>
          <GlobalStyle isDark={navbar} />
          <DarkTheme />
          <Head>
            <title>{events.name}</title>
          </Head>
          <HeaderLayout paragraph="" image={fromImageToUrl(events.image)}>
            {props.router.query.title}
          </HeaderLayout>
          <StyledSlug>
            <div className="events-time-location">
              <div className="calendar">
                <div>
                  <Icons name="Calendar" />
                </div>
                <div className="sub-content">
                  <span>Date</span>
                  <span>{events.date}</span>
                </div>
              </div>
              <div className="clock">
                <div>
                  <Clock color="#fff" className="icons" />
                </div>
                <div className="sub-content">
                  <span>Time</span>
                  <span>{events.Time}</span>
                </div>
              </div>
              <div className="cart">
                <div>
                  <Icons name="Cart" />
                </div>
                <div className="sub-content">
                  <span>Cost</span>
                  <span>₱{events.Cost}</span>
                </div>
              </div>
              <div className="location">
                <div>
                  <Icons name="Location" />
                </div>
                <div className="sub-content">
                  <span>Location</span>
                  <span>{events.Location}</span>
                  <Link
                    href={events.Directions !== null ? events.Directions : ""}
                  >
                    <a>Get Directions</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="events">
              <h1>{props.router.query.title}</h1>
              <p className="paragraph">{events.description}</p>
            </div>
          </StyledSlug>
          <Event />
        </SubLayout>
      )}
    </>
  );
};

export default withRouter(Events);
