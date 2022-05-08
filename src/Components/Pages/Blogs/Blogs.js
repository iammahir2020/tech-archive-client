import React from "react";
import { Table } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container my-5">
      <h2 className="header">Blogs</h2>
      <div className="blogs-container">
        <div className="blogs">
          <h5>Q1. Difference between JavaScript and Node JS.</h5>
          <hr />
          <div className="table-container table-responsive">
            <Table bordered variant="light">
              <thead>
                <tr>
                  <th>JavaScript</th>
                  <th>Node JS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    It's a scripting language that's open-source,
                    cross-platform, interpreted, and lightweight, and it's used
                    to create dynamic and web applications.
                  </td>
                  <td>
                    It's an open-source, cross-platform JavaScript runtime
                    environment that lets us run JavaScript on the server.
                  </td>
                </tr>
                <tr>
                  <td>
                    It's a programming language. Any browser with a functioning
                    browser engine will work with it.
                  </td>
                  <td>
                    It's a JavaScript interpreter and environment that includes
                    some useful libraries for JavaScript programming.
                  </td>
                </tr>
                <tr>
                  <td>It is generally used on the client-side server.</td>
                  <td>It is generally used on the server-side.</td>
                </tr>
                <tr>
                  <td>
                    Any engine, including Spider Monkey, V8, and JavaScript
                    Core, can run JavaScript.
                  </td>
                  <td>
                    Only the V8 engine, which is used by Google Chrome, supports
                    Node JS. The V8 engine will always run any JavaScript
                    program written using Node JS.
                  </td>
                </tr>
                <tr>
                  <td>
                    It's an updated version of the ECMA script that runs on
                    Chrome's C++-based V8 engine.
                  </td>
                  <td>It uses C, C++, and JavaScript.</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="blogs">
          <h5>Q2. When do we use 'NodeJS' and when do we use 'MongoDB'?</h5>
          <hr />
          <p>
            Node js is a javascript runtime environment enabling users to run
            javascript on the server. It's most typically used to develop web
            servers, but it may also be used to write a wide range of other
            programs. Any project necessitates a programming environment and a
            runtime library capable of compiling and/or interpreting code while
            also providing basic programming tools and support. Nodejs can be
            used to create a standalone Javascript program or server.
          </p>
          <p>
            MongoDB is a relational database system. It is a database that is no
            SQL-based. You'll almost likely need to utilize a database like
            mongodb if your application demands the ability to save data so that
            it can be effectively queried or updated later.
          </p>
        </div>
        <div className="blogs">
          <h5>Q3. Difference between 'SQL' and 'NoSQL'.</h5>
          <hr />
          <div className="table-container table-responsive">
            <Table bordered variant="light">
              <thead>
                <tr>
                  <th>SQL</th>
                  <th>NoSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    SQL databases are mainly known as RDBMS or Relational
                    Databases
                  </td>
                  <td>
                    NoSQL databases are mainly known as Non-relational or
                    distributed database
                  </td>
                </tr>
                <tr>
                  <td>
                    Traditional RDBMS examine and retrieve data for further
                    analysis using SQL syntax and queries. OLAP systems make
                    advantage of them.
                  </td>
                  <td>
                    The NoSQL database system is made up of many database
                    technologies. These databases were created in response to
                    the demands placed on current application development.
                  </td>
                </tr>
                <tr>
                  <td>Table-based databases are SQL databases.</td>
                  <td>
                    Document databases, key-value pairs databases, and graph
                    databases are all examples of NoSQL databases.
                  </td>
                </tr>
                <tr>
                  <td>A schema is predefined in SQL databases.</td>
                  <td>
                    For unstructured data, NoSQL databases employ dynamic
                    schema.
                  </td>
                </tr>
                <tr>
                  <td>
                    SQL databases are not designed to store hierarchical data.
                  </td>
                  <td>
                    Because it enables the key-value pair technique, NoSQL
                    databases are better suited for hierarchical data storage.
                  </td>
                </tr>
                <tr>
                  <td>
                    When data validity is critical, it should be employed.
                  </td>
                  <td>
                    Use when having quick data is more important than having
                    accurate data.
                  </td>
                </tr>
                <tr>
                  <td>
                    It is cross-platform compatible, as well as secure and free.
                  </td>
                  <td>
                    It is a user-friendly, high-performance, and adaptable tool.
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="blogs">
          <h5>Q4. What is the purpose of 'JWT' and how it works?</h5>
          <hr />
          <p>
            JWT or JSON Web Token is an open standard that allows two parties to
            share security information. Each JWT contains JSON elements
            containing a series of claims. JWTs use cryptography to ensure that
            claims cannot be modified after the token has been issued. JWT
            differs from other web tokens in that it contains a list of claims.
            The cornerstone of information sharing between two parties is
            claims. The use case in question determines the character of these
            claims. A claim could include information such as who issued the
            token, how long it is valid, and what permissions the client has
            been granted.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
