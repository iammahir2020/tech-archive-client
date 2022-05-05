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
            Node.js, in my opinion, is most suited for real-time applications
            such as online games, collaboration tools, chat rooms, or anything
            else where what one user does with the application needs to be
            viewed by other users right away, without requiring a page refresh.
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
            JWT (JSON Web Token) is an open standard for securely exchanging
            data between two parties. It's usually an encoded JSON file with a
            series of claims and a signature.
          </p>
          <p>
            The issuer typically signs the JWT using a private key, or secret.
            The receiver of the JWT will check the signature to make sure the
            token hasn't been tampered with after the issuer signed it.
            Unauthenticated sources will have a hard time guessing the signing
            key and attempting to modify the claims within the JWT.
          </p>
          <p>
            If we use a JWT as a bearer for authorization, we may check if the
            user is authenticated statelessly by verifying if the payload's
            expiration hasn't elapsed and the signature is valid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
