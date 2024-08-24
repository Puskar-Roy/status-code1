import log_img from "../../assets/delivery-animate.svg"

export default function ServiceP() {
  return (
    <div className="mt-[10vh]">
      <div>
        <div>
        <section className="w-full py-3 sm:py-8 lg:py-15">
          <div className="container px-2 md:px-4">
            <div className="grid gap-1 lg:grid-cols-[1fr_300px] lg:gap-2 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-5 ml-[80px] ">
                  <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl xl:text-5xl/none">
                    Elevate Your Work with Our Comprehensive Services
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    At Acme Services, we offer a wide range of solutions to help your work thrive. From strategy and
                    design to development and support, our team of experts is dedicated to delivering exceptional
                    results.
                  </p>
                </div>
              </div>
              <img
                src={log_img}
                width="350"
                height="350"
                alt="Services"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        </div>
        <h1 className=" ml-[75vh] font-semibold justify-center items-center text-5xl">Provide Your<span className="text-blue-600"> Service</span></h1>
      </div>
    </div>
  )
}
