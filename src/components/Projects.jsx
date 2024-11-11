const Projects = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          My Projects
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                alt="Front of men's Basic Tee in black."
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <h3 className="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Basic Tee
                </a>
              </h3>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>

          {/* More projects... */}
        </div>
      </div>
    </div>
  );
};

export default Projects;