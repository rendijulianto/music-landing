import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="bg-white h-screen rounded-lg">
      <div className="hidden lg:block">
        <div className=" flex justify-between items-center p-16">
          <div>
            <img src="/assets/images/logo/logo.png" alt="" />
          </div>
          <div>
            <ul className="flex">
              <li className="item-menu">Directions</li>
              <li className="item-menu">Teachers</li>
              <li className="item-menu">Company</li>
              <li className="item-menu">Shop</li>
              <li className="item-menu">Contacts</li>
            </ul>
          </div>
          <div>
            <p className="item-phone">+62 8212-9632-854</p>
          </div>
          <div>
            <button className="item-button hover:bg-black hover:text-white bg-white ">
              Sign in
            </button>
            <button className="item-button hover:bg-white hover:text-black bg-black text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute hidden lg:block">
          <img
            src="/assets/images/illustrations/left.png"
            width="431"
            height="514"
            alt=""
          />
        </div>

        <div className="absolute right-0 hidden lg:block">
          <img
            width="431"
            height="514"
            src="/assets/images/illustrations/right.png"
            alt=""
          />
        </div>
        <div className="flex justify-center h-screen mt-16">
          <div className="content">
            <h3 className="header ">
              Our team will teach you the art of music and melody.
            </h3>
            <p className="mt-5 sub-header">
              Our experts and teachers will teach you to really feel and love
              music. Choosethe direction you want to follow.
            </p>
            <div className="group-guitar mt-5">
              <select className="select-custom mr-5">
                <option value="">Guitar</option>
                <option value="">Drump</option>
              </select>
              <button className="btn-guitar">
                <img src="/assets/images/icons/arrow-right.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
