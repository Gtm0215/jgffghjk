import {
  paintings,
  customPaintings,
  bookmarks,
  postcards,
  customBulbDeco,
  customWallCd,
  oceanVinyl,
  xmasPostcard,
  animalCanvas,
  giftHamper
} from "../assets"

export default function App() {
  return (
    <div>

      <h2>Categories</h2>

      <div>
        <div>
          <img src={paintings} alt="Paintings" />
          <p>Paintings</p>
        </div>

        <div>
          <img src={customPaintings} alt="Custom Paintings" />
          <p>Custom Paintings</p>
        </div>

        <div>
          <img src={bookmarks} alt="Bookmarks" />
          <p>Bookmarks</p>
        </div>

        <div>
          <img src={postcards} alt="Postcards" />
          <p>Postcards</p>
        </div>
      </div>

      <h2>Featured Products</h2>

      <div>
        <div>
          <img src={customBulbDeco} alt="Custom Bulb Deco" />
          <h3>Custom Bulb Deco</h3>
          <p>₹299</p>
        </div>

        <div>
          <img src={customWallCd} alt="Custom Wall CD Hanging" />
          <h3>Custom Wall CD Hanging</h3>
          <p>₹299</p>
        </div>

        <div>
          <img src={oceanVinyl} alt="Ocean on Vinyl" />
          <h3>Ocean on Vinyl</h3>
          <p>₹499</p>
        </div>

        <div>
          <img src={xmasPostcard} alt="Custom Xmas Postcard" />
          <h3>Custom Xmas Postcard</h3>
          <p>₹150</p>
        </div>

        <div>
          <img src={animalCanvas} alt="Animal Canvas" />
          <h3>Animal Canvas</h3>
          <p>₹599</p>
        </div>

        <div>
          <img src={giftHamper} alt="Mystery Craft Hamper" />
          <h3>Mystery Craft Hamper</h3>
          <p>₹1299</p>
        </div>
      </div>

    </div>
  )
}
