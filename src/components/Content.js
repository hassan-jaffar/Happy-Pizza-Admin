import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Content() {
  return (
    <>
      <h6 className="px-1">CONTENT</h6>
      <hr />
      <br />
      <div className="row">
        <div className="col-md-12">
          <div className="container bs pb-5">
            <h6 className="px-1 pt-4">TIMINGS</h6>
            <hr />
            <br />
            <CKEditor id="inputText" editor={ClassicEditor} />
            <div className="container mt-5 text-center">
              <button className="btn btn-info py-2">Save</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <form class="row g-3 needs-validation" novalidate>
          <div className="row mt-3">
            <hr />
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Frontend Template
              </label>
              <select class="form-select" aria-label="Default select example">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 3 Link
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Box 3 Link"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Frontend & Admin Template
              </label>
              <select class="form-select" aria-label="Default select example">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Menu
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Banner 1
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Primary Color
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="#2E3190"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Banner 2
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Banner 3
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Secondary Color
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="#25185873"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Banner 4
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Banner 5
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Title 1
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="FRESH & QUALITY FOOD"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Box 1 icon
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Box 2 icon
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Title 2
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Why Us?"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustomUsername" class="form-label">
                Box 3 icon
              </label>
              <div class="input-group has-validation">
                <input
                  type="file"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Description 1
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Quality in Food ensures that we get the freshest of ingredients and produce every single day for all of our taste dishes."
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Description 2
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="We are pleased to offer good quality and quantity at affordable prices. Only the freshest and best quality ingredients are used in the preparation of our food items."
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Banner Text 1
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="We keep it Simple,Fresh and Real"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Banner Text 2
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Now Order All Favourite Food Online"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 1 Title
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Easy To Order."
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 1 Description
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="You can now order online, all your favourite dishes and many more delicious options, and have them delivered straight to your door in no time at all."
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 1 Link
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Box 1 Link"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 2 Title
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Quality Food"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 2 Description
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Order food online! It's so easy to use, fast and convenient. Try our new, online website which contains our entire takeaway menu."
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 2 Link
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Box 2 Link"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 3 Title
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Thank You"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 3 Description
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Thank you for visiting our Website We hope you enjoy our online ordering website and your food."
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Box 3 Link
              </label>
              <div class="input-group has-validation">
                <input
                  type="text"
                  placeholder="Box 3 Link"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
          </div>
          <div class="col-12 mt-3">
            <button class="btn btn-info" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="row bs mt-5 p-3">
        <h6 className="mt-3">GALLERY</h6>
        <hr style={{ padding: "0px" }} />
        <br />

        <div className="col-md-12 mt-3">
          <label for="validationCustomUsername" class="form-label">
            Link
          </label>
          <div class="input-group has-validation">
            <input
              type="text"
              placeholder="Link"
              class="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            />
          </div>
        </div>

        <div className="col-md-12 mt-3">
          <label for="validationCustomUsername" class="form-label">
            Gallery Image
          </label>
          <div class="input-group has-validation">
            <input
              type="file"
              class="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            />
          </div>
        </div>

        <div className="col-md-12 text-center mt-3">
          <i class="fa-solid fa-camera text-muted fa-10x"></i>
        </div>

        <div className="container mt-3 text-center">
          <button className="btn btn-info w-100">Save</button>
        </div>
        <hr style={{ padding: "0px" }} className="mt-4" />
      </div>
    </>
  );
}

export default Content;
