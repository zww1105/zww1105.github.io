import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div>
        <svg className="loader" viewBox="0 0 48 30" width="48px" height="30px">
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
          >
            <g transform="translate(9.5,19)">
              <circle
                className="loader_tire"
                r={9}
                strokeDasharray="56.549 56.549"
              />
              <g
                className="loader_spokes-spin"
                strokeDasharray="31.416 31.416"
                strokeDashoffset="-23.562"
              >
                <circle className="loader_spokes" r={5} />
                <circle
                  className="loader_spokes"
                  r={5}
                  transform="rotate(180,0,0)"
                />
              </g>
            </g>
            <g transform="translate(24,19)">
              <g
                className="loader_pedals-spin"
                strokeDasharray="25.133 25.133"
                strokeDashoffset="-21.991"
                transform="rotate(67.5,0,0)"
              >
                <circle className="loader_pedals" r={4} />
                <circle
                  className="loader_pedals"
                  r={4}
                  transform="rotate(180,0,0)"
                />
              </g>
            </g>
            <g transform="translate(38.5,19)">
              <circle
                className="loader_tire"
                r={9}
                strokeDasharray="56.549 56.549"
              />
              <g
                className="loader_spokes-spin"
                strokeDasharray="31.416 31.416"
                strokeDashoffset="-23.562"
              >
                <circle className="loader_spokes" r={5} />
                <circle
                  className="loader_spokes"
                  r={5}
                  transform="rotate(180,0,0)"
                />
              </g>
            </g>
            <polyline
              className="loader_seat"
              points="14 3,18 3"
              strokeDasharray="5 5"
            />
            <polyline
              className="loader_body"
              points="16 3,24 19,9.5 19,18 8,34 7,24 19"
              strokeDasharray="79 79"
            />
            <path
              className="loader_handlebars"
              d="m30,2h6s1,0,1,1-1,1-1,1"
              strokeDasharray="10 10"
            />
            <polyline
              className="loader_front"
              points="32.5 2,38.5 19"
              strokeDasharray="19 19"
            />
          </g>
        </svg>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    display: block;
    width: 150px;
    height: auto;
  }

  .loader_body,
  .loader_front,
  .loader_handlebars,
  .loader_pedals,
  .loader_pedals-spin,
  .loader_seat,
  .loader_spokes,
  .loader_spokes-spin,
  .loader_tire {
    animation: bikeBody 1.5s ease-in-out infinite;
    stroke: #ec4899;
    transition: stroke var(--trans-dur);
  }

  .loader_front {
    animation-name: bikeFront;
  }

  .loader_handlebars {
    animation-name: bikeHandlebars;
  }

  .loader_pedals {
    animation-name: bikePedals;
  }

  .loader_pedals-spin {
    animation-name: bikePedalsSpin;
  }

  .loader_seat {
    animation-name: bikeSeat;
  }

  .loader_spokes,
  .loader_tire {
    stroke: #ec4899;
  }

  .loader_spokes {
    animation-name: bikeSpokes;
  }

  .loader_spokes-spin {
    animation-name: bikeSpokesSpin;
  }

  .loader_tire {
    animation-name: bikeTire;
  }

  /* Dark theme */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: hsl(var(--hue), 90%, 10%);
      --fg: hsl(var(--hue), 90%, 90%);
    }
  }

  /* Animations */
  @keyframes bikeBody {
    from {
      stroke-dashoffset: 79;
    }

    33%,
    67% {
      stroke-dashoffset: 0;
    }

    to {
      stroke-dashoffset: -79;
    }
  }

  @keyframes bikeFront {
    from {
      stroke-dashoffset: 19;
    }

    33%,
    67% {
      stroke-dashoffset: 0;
    }

    to {
      stroke-dashoffset: -19;
    }
  }

  @keyframes bikeHandlebars {
    from {
      stroke-dashoffset: 10;
    }

    33%,
    67% {
      stroke-dashoffset: 0;
    }

    to {
      stroke-dashoffset: -10;
    }
  }

  @keyframes bikePedals {
    from {
      animation-timing-function: ease-in;
      stroke-dashoffset: -25.133;
    }

    33%,
    67% {
      animation-timing-function: ease-out;
      stroke-dashoffset: -21.991;
    }

    to {
      stroke-dashoffset: -25.133;
    }
  }

  @keyframes bikePedalsSpin {
    from {
      transform: rotate(0.1875turn);
    }

    to {
      transform: rotate(3.1875turn);
    }
  }

  @keyframes bikeSeat {
    from {
      stroke-dashoffset: 5;
    }

    33%,
    67% {
      stroke-dashoffset: 0;
    }

    to {
      stroke-dashoffset: -5;
    }
  }

  @keyframes bikeSpokes {
    from {
      animation-timing-function: ease-in;
      stroke-dashoffset: -31.416;
    }

    33%,
    67% {
      animation-timing-function: ease-out;
      stroke-dashoffset: -23.562;
    }

    to {
      stroke-dashoffset: -31.416;
    }
  }

  @keyframes bikeSpokesSpin {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(3turn);
    }
  }

  @keyframes bikeTire {
    from {
      animation-timing-function: ease-in;
      stroke-dashoffset: 56.549;
      transform: rotate(0);
    }

    33% {
      stroke-dashoffset: 0;
      transform: rotate(0.33turn);
    }

    67% {
      animation-timing-function: ease-out;
      stroke-dashoffset: 0;
      transform: rotate(0.67turn);
    }

    to {
      stroke-dashoffset: -56.549;
      transform: rotate(1turn);
    }
  }
`;

export default Loader;
