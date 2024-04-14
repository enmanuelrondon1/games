export const Won = () => {
  return (
    <>
      <div className="max-w-sm w-80 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-auto mt-4">
        <a href="#">
          <video
            className="rounded-t-lg  "
            src="https://firebasestorage.googleapis.com/v0/b/unomia-stolonifera.appspot.com/o/Navegacion%2Farchivos-varios%2FSuper_saturated_color%2C_fireworks_over_a_field_at_sunset._seed3019184163637480.mp4?alt=media&token=d6c15f73-8905-4a4e-ae35-c5d36fef0fbe"
            autoPlay
            loop
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Muy Bien, has ganado! Demuestras que eres muy inteligente
            </h5>
          </a>

          <a
            href="/game"
            className="inline-flex items-center px-5 py-2.5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Volver a Jugar
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
