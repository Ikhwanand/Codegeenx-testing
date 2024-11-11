const Experience = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          My Experience
        </h2>
        <div className="mt-6">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div>
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Machine Learning Engineer
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                I have experience working as a Machine Learning Engineer, where
                I developed and deployed machine learning models to solve
                real-world problems.
              </dd>
            </div>

            <div>
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Data Scientist
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                In my role as a Data Scientist, I analyzed complex datasets to
                extract insights and helped organizations make data-driven
                decisions.
              </dd>
            </div>

            <div>
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Software Developer
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                I have a strong background in software development, having
                worked on various projects ranging from web applications to
                mobile apps.
              </dd>
            </div>

            <div>
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Researcher
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                I am passionate about staying at the forefront of AI research
                and have published several papers in renowned conferences and
                journals.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};


export default Experience;