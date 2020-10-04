import React from "react";
import "../styles/Navbar.css";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";

export const NavigationBar = () => {
  return (
    <Navbar className="container-nav">
      <NavbarBrand className="brand">
      <svg
        id="title"
        width="206"
        height="27"
        viewBox="0 0 206 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.984 2.39199V19H15.8V6.61599L10.28 19H8.74397L3.19997 6.59199V19H1.01597V2.39199H3.36797L9.51197 16.12L15.656 2.39199H17.984Z"
          stroke="#ACEAF7"
          strokeWidth="1"
        />
        <path
          d="M33.0158 5.84799L25.0958 25.192H22.8398L25.4318 18.856L20.1278 5.84799H22.5518L26.6798 16.504L30.7598 5.84799H33.0158Z"
          stroke="#ACEAF7"
          strokeWidth="1"
        />
        <path
          d="M44.0193 19L40.0353 12.16H37.3953V19H35.2113V2.27199H40.6113C41.8753 2.27199 42.9393 2.48799 43.8033 2.91999C44.6833 3.35199 45.3393 3.93599 45.7713 4.67199C46.2033 5.40799 46.4193 6.24799 46.4193 7.19199C46.4193 8.34399 46.0833 9.35999 45.4113 10.24C44.7553 11.12 43.7633 11.704 42.4353 11.992L46.6353 19H44.0193ZM37.3953 10.408H40.6113C41.7953 10.408 42.6833 10.12 43.2753 9.54399C43.8673 8.95199 44.1633 8.16799 44.1633 7.19199C44.1633 6.19999 43.8673 5.43199 43.2753 4.88799C42.6993 4.34399 41.8113 4.07199 40.6113 4.07199H37.3953V10.408Z"
          stroke="#ACEAF7"
          strokeWidth="1"
        />
        <path
          d="M61.8128 11.92C61.8128 12.336 61.7888 12.776 61.7408 13.24H51.2288C51.3088 14.536 51.7488 15.552 52.5488 16.288C53.3648 17.008 54.3488 17.368 55.5008 17.368C56.4448 17.368 57.2288 17.152 57.8528 16.72C58.4928 16.272 58.9408 15.68 59.1968 14.944H61.5488C61.1968 16.208 60.4928 17.24 59.4368 18.04C58.3808 18.824 57.0688 19.216 55.5008 19.216C54.2528 19.216 53.1328 18.936 52.1408 18.376C51.1648 17.816 50.3968 17.024 49.8368 16C49.2768 14.96 48.9968 13.76 48.9968 12.4C48.9968 11.04 49.2688 9.84799 49.8128 8.82399C50.3568 7.79999 51.1168 7.01599 52.0928 6.47199C53.0848 5.91199 54.2208 5.63199 55.5008 5.63199C56.7488 5.63199 57.8528 5.90399 58.8128 6.44799C59.7728 6.99199 60.5088 7.74399 61.0208 8.70399C61.5488 9.64799 61.8128 10.72 61.8128 11.92ZM59.5568 11.464C59.5568 10.632 59.3728 9.91999 59.0048 9.32799C58.6368 8.71999 58.1328 8.26399 57.4928 7.95999C56.8688 7.63999 56.1728 7.47999 55.4048 7.47999C54.3008 7.47999 53.3568 7.83199 52.5728 8.53599C51.8048 9.23999 51.3648 10.216 51.2528 11.464H59.5568Z"
          stroke="#ACEAF7"
          strokeWidth="1"
        />
        <path
          d="M63.8797 12.376C63.8797 11.032 64.1517 9.85599 64.6957 8.84799C65.2397 7.82399 65.9837 7.03199 66.9277 6.47199C67.8877 5.91199 68.9517 5.63199 70.1197 5.63199C71.2717 5.63199 72.2717 5.87999 73.1197 6.37599C73.9677 6.87199 74.5997 7.49599 75.0157 8.24799V5.84799H77.2237V19H75.0157V16.552C74.5837 17.32 73.9357 17.96 73.0717 18.472C72.2237 18.968 71.2317 19.216 70.0957 19.216C68.9277 19.216 67.8717 18.928 66.9277 18.352C65.9837 17.776 65.2397 16.968 64.6957 15.928C64.1517 14.888 63.8797 13.704 63.8797 12.376ZM75.0157 12.4C75.0157 11.408 74.8157 10.544 74.4157 9.80799C74.0157 9.07199 73.4717 8.51199 72.7837 8.12799C72.1117 7.72799 71.3677 7.52799 70.5517 7.52799C69.7357 7.52799 68.9917 7.71999 68.3197 8.10399C67.6477 8.48799 67.1117 9.04799 66.7117 9.78399C66.3117 10.52 66.1117 11.384 66.1117 12.376C66.1117 13.384 66.3117 14.264 66.7117 15.016C67.1117 15.752 67.6477 16.32 68.3197 16.72C68.9917 17.104 69.7357 17.296 70.5517 17.296C71.3677 17.296 72.1117 17.104 72.7837 16.72C73.4717 16.32 74.0157 15.752 74.4157 15.016C74.8157 14.264 75.0157 13.392 75.0157 12.4Z"
          stroke="#ACEAF7"
          strokeWidth="1"
        />
        <path
          d="M80.0984 12.4C80.0984 11.04 80.3704 9.85599 80.9144 8.84799C81.4584 7.82399 82.2104 7.03199 83.1704 6.47199C84.1464 5.91199 85.2584 5.63199 86.5064 5.63199C88.1224 5.63199 89.4504 6.02399 90.4904 6.80799C91.5464 7.59199 92.2424 8.67999 92.5784 10.072H90.2264C90.0024 9.27199 89.5624 8.63999 88.9064 8.17599C88.2664 7.71199 87.4664 7.47999 86.5064 7.47999C85.2584 7.47999 84.2504 7.91199 83.4824 8.77599C82.7144 9.62399 82.3304 10.832 82.3304 12.4C82.3304 13.984 82.7144 15.208 83.4824 16.072C84.2504 16.936 85.2584 17.368 86.5064 17.368C87.4664 17.368 88.2664 17.144 88.9064 16.696C89.5464 16.248 89.9864 15.608 90.2264 14.776H92.5784C92.2264 16.12 91.5224 17.2 90.4664 18.016C89.4104 18.816 88.0904 19.216 86.5064 19.216C85.2584 19.216 84.1464 18.936 83.1704 18.376C82.2104 17.816 81.4584 17.024 80.9144 16C80.3704 14.976 80.0984 13.776 80.0984 12.4Z"
          stroke="#ACEAF7"
          strokeWidth="1"
        />
        <path
          d="M98.1565 7.64799V15.4C98.1565 16.04 98.2925 16.496 98.5645 16.768C98.8365 17.024 99.3085 17.152 99.9805 17.152H101.589V19H99.6205C98.4045 19 97.4925 18.72 96.8845 18.16C96.2765 17.6 95.9725 16.68 95.9725 15.4V7.64799H94.2685V5.84799H95.9725V2.53599H98.1565V5.84799H101.589V7.64799H98.1565Z"
          stroke="#ACEAF7"
          strokeWidth="1"
        />
        <path
          d="M125.259 2.27199L120.411 19H117.963L114.075 5.53599L110.043 19L107.619 19.024L102.939 2.27199H105.267L108.915 16.456L112.947 2.27199H115.395L119.235 16.408L122.907 2.27199H125.259Z"
          stroke="#ACEAF7"
          strokeWidth="1"
        />
        <path
          d="M139.649 11.92C139.649 12.336 139.625 12.776 139.577 13.24H129.065C129.145 14.536 129.585 15.552 130.385 16.288C131.201 17.008 132.185 17.368 133.337 17.368C134.281 17.368 135.065 17.152 135.689 16.72C136.329 16.272 136.777 15.68 137.033 14.944H139.385C139.033 16.208 138.329 17.24 137.273 18.04C136.217 18.824 134.905 19.216 133.337 19.216C132.089 19.216 130.969 18.936 129.977 18.376C129.001 17.816 128.233 17.024 127.673 16C127.113 14.96 126.833 13.76 126.833 12.4C126.833 11.04 127.105 9.84799 127.649 8.82399C128.193 7.79999 128.953 7.01599 129.929 6.47199C130.921 5.91199 132.057 5.63199 133.337 5.63199C134.585 5.63199 135.689 5.90399 136.649 6.44799C137.609 6.99199 138.345 7.74399 138.857 8.70399C139.385 9.64799 139.649 10.72 139.649 11.92ZM137.393 11.464C137.393 10.632 137.209 9.91999 136.841 9.32799C136.473 8.71999 135.969 8.26399 135.329 7.95999C134.705 7.63999 134.009 7.47999 133.241 7.47999C132.137 7.47999 131.193 7.83199 130.409 8.53599C129.641 9.23999 129.201 10.216 129.089 11.464H137.393Z"
          stroke="#ACEAF7"
          strokeWidth="1"
        />
        <path
          d="M141.716 12.376C141.716 11.032 141.988 9.85599 142.532 8.84799C143.076 7.82399 143.82 7.03199 144.764 6.47199C145.724 5.91199 146.788 5.63199 147.956 5.63199C149.108 5.63199 150.108 5.87999 150.956 6.37599C151.804 6.87199 152.436 7.49599 152.852 8.24799V5.84799H155.06V19H152.852V16.552C152.42 17.32 151.772 17.96 150.908 18.472C150.06 18.968 149.068 19.216 147.932 19.216C146.764 19.216 145.708 18.928 144.764 18.352C143.82 17.776 143.076 16.968 142.532 15.928C141.988 14.888 141.716 13.704 141.716 12.376ZM152.852 12.4C152.852 11.408 152.652 10.544 152.252 9.80799C151.852 9.07199 151.308 8.51199 150.62 8.12799C149.948 7.72799 149.204 7.52799 148.388 7.52799C147.572 7.52799 146.828 7.71999 146.156 8.10399C145.484 8.48799 144.948 9.04799 144.548 9.78399C144.148 10.52 143.948 11.384 143.948 12.376C143.948 13.384 144.148 14.264 144.548 15.016C144.948 15.752 145.484 16.32 146.156 16.72C146.828 17.104 147.572 17.296 148.388 17.296C149.204 17.296 149.948 17.104 150.62 16.72C151.308 16.32 151.852 15.752 152.252 15.016C152.652 14.264 152.852 13.392 152.852 12.4Z"
          stroke="#ACEAF7"
          strokeWidth="1"
        />
        <path
          d="M161.414 7.64799V15.4C161.414 16.04 161.55 16.496 161.822 16.768C162.094 17.024 162.566 17.152 163.238 17.152H164.846V19H162.878C161.662 19 160.75 18.72 160.142 18.16C159.534 17.6 159.23 16.68 159.23 15.4V7.64799H157.526V5.84799H159.23V2.53599H161.414V5.84799H164.846V7.64799H161.414Z"
          stroke="#ACEAF7"
          strokeWidth="1"
        />
        <path
          d="M174.021 5.60799C175.013 5.60799 175.909 5.82399 176.709 6.25599C177.509 6.67199 178.133 7.30399 178.581 8.15199C179.045 8.99999 179.277 10.032 179.277 11.248V19H177.117V11.56C177.117 10.248 176.789 9.24799 176.133 8.55999C175.477 7.85599 174.581 7.50399 173.445 7.50399C172.293 7.50399 171.373 7.86399 170.685 8.58399C170.013 9.30399 169.677 10.352 169.677 11.728V19H167.493V1.23999H169.677V7.71999C170.109 7.04799 170.701 6.52799 171.453 6.15999C172.221 5.79199 173.077 5.60799 174.021 5.60799Z"
          stroke="#ACEAF7"
          strokeWidth="1"
        />
        <path
          d="M194.844 11.92C194.844 12.336 194.82 12.776 194.772 13.24H184.26C184.34 14.536 184.78 15.552 185.58 16.288C186.396 17.008 187.38 17.368 188.532 17.368C189.476 17.368 190.26 17.152 190.884 16.72C191.524 16.272 191.972 15.68 192.228 14.944H194.58C194.228 16.208 193.524 17.24 192.468 18.04C191.412 18.824 190.1 19.216 188.532 19.216C187.284 19.216 186.164 18.936 185.172 18.376C184.196 17.816 183.428 17.024 182.868 16C182.308 14.96 182.028 13.76 182.028 12.4C182.028 11.04 182.3 9.84799 182.844 8.82399C183.388 7.79999 184.148 7.01599 185.124 6.47199C186.116 5.91199 187.252 5.63199 188.532 5.63199C189.78 5.63199 190.884 5.90399 191.844 6.44799C192.804 6.99199 193.54 7.74399 194.052 8.70399C194.58 9.64799 194.844 10.72 194.844 11.92ZM192.588 11.464C192.588 10.632 192.404 9.91999 192.036 9.32799C191.668 8.71999 191.164 8.26399 190.524 7.95999C189.9 7.63999 189.204 7.47999 188.436 7.47999C187.332 7.47999 186.388 7.83199 185.604 8.53599C184.836 9.23999 184.396 10.216 184.284 11.464H192.588Z"
          stroke="#ACEAF7"
          strokeWidth="1"
        />
        <path
          d="M199.911 7.98399C200.295 7.23199 200.839 6.64799 201.543 6.23199C202.263 5.81599 203.135 5.60799 204.159 5.60799V7.86399H203.583C201.135 7.86399 199.911 9.19199 199.911 11.848V19H197.727V5.84799H199.911V7.98399Z"
          stroke="#ACEAF7"
          strokeWidth="1"
        />
      </svg>
      </NavbarBrand>
      <Nav className="nav-item">
      <div>
          <Nav.Link id="current" href="/">
            Current
          </Nav.Link>
        </div>
        <div>
          <Nav.Link id="forecast" href="/forecast">
            Forecast
          </Nav.Link>
        </div>
      </Nav>
      </Navbar>
  );
};
