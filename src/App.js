import React from "react";
import "./styles.css";

const navItems = [
  {
    name: "Component A",
    component: "test"
  }
];

const Layout = props => {
  return (
    <div className="App">
      <div className="Sidebar">
        <ul />
      </div>
    </div>
  );
};
const NavItem = props => {};

export default function App() {
  return <Layout />;
}
