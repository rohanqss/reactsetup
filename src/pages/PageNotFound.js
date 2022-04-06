
const PageNotFound = () => {
  return (
    <div className="page-wrapper">
      <div className="container d-flex justify-content-center align-items-center my-5 py-4">
        <div className="row">
          <div className="col-12">
            <div className="px-1 pb-2 text-center">
              <div>
                <h1 className="" style={{ fontSize: "17vw" }}>
                  4<i className="bi bi-emoji-frown"></i>4
                </h1>
                <h2>Opps! Page Not Found</h2>
                <p>
                  Sorry, The page you are looking for doesn't exist. Please go
                  back to home
                </p>
                <a href="/" className="btn btn-dark btn-lg">
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
