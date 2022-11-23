import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";

function Home() {
  const { state } = useContext(CartContext);
  console.log(state.products);
  return (
    <>
      <div className="main__box">
        <div className="grid__box">
          <div className="box">
            <img
              src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="img"
            />

            <div className="box__info">
              <h2 className="name">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
              </h2>
              <div className="desc">
                Your perfect pack for everyday use and walks in the forest.
                Stash your laptop (up to 15 inches) in the padded sleeve, your
                everyday
              </div>

              <button> add to cart </button>
            </div>
          </div>
          <div className="box">
            <img
              src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="img"
            />

            <div className="box__info">
              <h2 className="name">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
              </h2>
              <div className="desc">
                Your perfect pack for everyday use and walks in the forest.
                Stash your laptop (up to 15 inches) in the padded sleeve, your
                everyday
              </div>

              <button> add to cart </button>
            </div>
          </div>
          <div className="box">
            <img
              src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="img"
            />

            <div className="box__info">
              <h2 className="name">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
              </h2>
              <div className="desc">
                Your perfect pack for everyday use and walks in the forest.
                Stash your laptop (up to 15 inches) in the padded sleeve, your
                everyday
              </div>

              <button> add to cart </button>
            </div>
          </div>
          <div className="box">
            <img
              src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="img"
            />

            <div className="box__info">
              <h2 className="name">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
              </h2>
              <div className="desc">
                Your perfect pack for everyday use and walks in the forest.
                Stash your laptop (up to 15 inches) in the padded sleeve, your
                everyday
              </div>

              <button> add to cart </button>
            </div>
          </div>
          <div className="box">
            <img
              src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="img"
            />

            <div className="box__info">
              <h2 className="name">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
              </h2>
              <div className="desc">
                Your perfect pack for everyday use and walks in the forest.
                Stash your laptop (up to 15 inches) in the padded sleeve, your
                everyday
              </div>

              <button> add to cart </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
