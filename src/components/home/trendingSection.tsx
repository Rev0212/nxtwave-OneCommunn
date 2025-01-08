
import { ChevronLeft, ChevronRight, Sofa } from "lucide-react";

const TrendingProducts = () => {
  const products = [
    {
      id: 1,
      name: "Luxury Bed Set",
      image: "https://s3-alpha-sig.figma.com/img/c64b/c42c/63341ea16e5872842115871305fb111f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFbYJhh7sGP-BG~6E2R1ZvnvIqRB7IjWwx6xvgk6mllQh9klmfIAUAJZeaQZ~SYwDss9pbrfejgPG1Nrn58KJ05OCGUV3rjSnFFQdiN-dDuC2dGSw3PPVdgm4ghK52N-sjpw250TpRMSWDGm880cw4l-GAwOOSijpwMiesf497lgbYUbmHuzAoHEakl~lZZCoCopnMpJbp667UQ2IgLToMHge1AHtaPhSqCUyGOknVwD1AVn~qx5C8p9NxxmhFiTEgCXwIj9YcbtALuSwWKuVse~Wo0jHWu6mdVeucaSJZO3CHHTvXTaNpvo8zQ1Jlht84NLWqgpAyeGoO7jVFrYRA__",
      link: "#"
    },
    {
      id: 2,
      name: "Luxury Sofa Set",
      image: "https://th.bing.com/th/id/OIP.Ipj41nWi0olnUmqCoJ56ZwHaHa?rs=1&pid=ImgDetMain",
      link: "#",
      hasEnquireButton: true
    },
    {
      id: 3,
      name: "Luxury Dining Table",
      image: "https://s3-alpha-sig.figma.com/img/8d7f/0f21/fc175588cb210a59c9fc97d9ac64e126?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fp5D7OJMv0q~ZFce44tvV-opEh4jszpDBftlv2E6dby2e5htbtd91-K6d3vEcA0zaipzQbnjoX8f~GKzQBOdKZaLXqOIz6YB5d3K8f-xscBc5KT5GjVwA08WyafDWW~6Exheyz0L5j0tqI6zmYRhvcyQZATvl96BNlJNp8tN242nIT5BR53LGDhGplEPXRJTrbI~MquT-8TPpxB~wP6GXm1YPXrpihhhuAhUBgbIdrjAE~txszjhDtX1HQZ4KkqCg9M7L9hiy2fJ0fRQfk7rah8hD1uFrJWsEMqvntspX6CCAW-Sb7V2nCvHGd2Oh14TQ781v4qmPaKbDN6EVqyoNQ__",
      link: "#"
    },
    {
      id: 4,
      name: "Luxury Bed Set",
      image: "https://s3-alpha-sig.figma.com/img/c64b/c42c/63341ea16e5872842115871305fb111f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VFbYJhh7sGP-BG~6E2R1ZvnvIqRB7IjWwx6xvgk6mllQh9klmfIAUAJZeaQZ~SYwDss9pbrfejgPG1Nrn58KJ05OCGUV3rjSnFFQdiN-dDuC2dGSw3PPVdgm4ghK52N-sjpw250TpRMSWDGm880cw4l-GAwOOSijpwMiesf497lgbYUbmHuzAoHEakl~lZZCoCopnMpJbp667UQ2IgLToMHge1AHtaPhSqCUyGOknVwD1AVn~qx5C8p9NxxmhFiTEgCXwIj9YcbtALuSwWKuVse~Wo0jHWu6mdVeucaSJZO3CHHTvXTaNpvo8zQ1Jlht84NLWqgpAyeGoO7jVFrYRA__",
      link: "#"
    },
    {
      id: 5,
      name: "Elegant candle set",
      image: "https://s3-alpha-sig.figma.com/img/8702/2fea/0e38e1e6003a311863320dcfc1f21b51?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oV9WOyCxCJFm5JUKJHH8A-q6OA8KrQaBn6oFr9HbMsB4BsPyjaMgAoVbitUXiioHeXKG-SO2yNbfvOjY0GnEUTSJ2hxAZgBRqJ9HPPvJr2nUhdZ6ZJ1LEtWtSHSFlMenEFbtY486RaIspdfBLVQ4TTh1f15YRwzAUlc4owzPk70K6g~drAiFsKs~IciwFnsqS8gSNkMS3oYtAZLTxoLLhINEiRdLgo~G6irQvAtQKApJuWEg3kJrOiFae5Za1i8vV86yjl42QBiBOa1MiXCGNz-oKpTbkfjzaESaWIi5I3TgOj0QFcuY21ZhhXPX75uEt3gKwYhkNA95aPTFQ7pQiA__",
      link: "#"
    },
    {
      id: 6,
      name: "Elegant sofa set",
      image: "https://s3-alpha-sig.figma.com/img/ceb9/5648/6bede647d8108a92d1fca96a97437d4e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R9-qfXop7z4iDMl5AllF5LB0Ozruk8gOGbZy6jCKSm8u55imUmG~or4klup6R9surufhvfVl-unr-FD~qzIn3YW43w0CWek4ja1N3mezREFgRKd3dIMTsxX3AkbHBMMAdP6kgvqkq-KwfqQVdR0YtkJoZ02XI3tlg4mXnjfZxXiHgaRy6HJJoiMdnhvLUxjt9hbsFQxH1pFeKFx4jLbgLxM1pCpJ89y6TIux8c0EsJpNY~r2F1eKqODOONZab2N0SgZXu~dslYAUtEqg1amD-IS3fC-V~owOtCVCBaMocKHMlv5ETj6VrpU~HtsvE2Ci-Lb82TTEOujuYRY5qXjFuA__",
      link: "#"
    },
    {
      id: 7,
      name: "Fruit platter",
      image: "https://s3-alpha-sig.figma.com/img/54d8/2b86/59b7e8cf93d6d32688435d4033377dea?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qR8ZFlErIaEgx1Q0WYfusfOT6rv~Iu-J5xKstE2quEUy2L85K97hpKFGcevQc1x9dmsDeqzIkzkK2H93r0MZXzEG8VRG-zlgiFGbLgaT1P0B2o7X0X4TF1PeRsHzCUncmr~wNubXe0LXiQFmFXbRRbGxlc1YB0MTQnENex9eb3KOEpsinyNsWwjJ~ZcPwn1tF~3-mwV-9ASsKn7xdGlt~2x9i8y2F64iHCZWs51HCV-BAV0iT5clZ4HxmtnwoVDsUgUgdx6fTVXo5yPrRF~EkYSVw5pldG7DGiZql5J~-gu9w57yJqTzHjJQi-SDabSnuL8bzJefMAEnGiYQHN~Qyg__",
      link: "#"
    },
    {
      id: 8,
      name: "Elegant candle set",
      image: "https://s3-alpha-sig.figma.com/img/8702/2fea/0e38e1e6003a311863320dcfc1f21b51?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oV9WOyCxCJFm5JUKJHH8A-q6OA8KrQaBn6oFr9HbMsB4BsPyjaMgAoVbitUXiioHeXKG-SO2yNbfvOjY0GnEUTSJ2hxAZgBRqJ9HPPvJr2nUhdZ6ZJ1LEtWtSHSFlMenEFbtY486RaIspdfBLVQ4TTh1f15YRwzAUlc4owzPk70K6g~drAiFsKs~IciwFnsqS8gSNkMS3oYtAZLTxoLLhINEiRdLgo~G6irQvAtQKApJuWEg3kJrOiFae5Za1i8vV86yjl42QBiBOa1MiXCGNz-oKpTbkfjzaESaWIi5I3TgOj0QFcuY21ZhhXPX75uEt3gKwYhkNA95aPTFQ7pQiA__",
      link: "#"
    }
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Sofa className="w-6 h-6" />
            <h2 className="text-xl font-bold">Trending products</h2>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-white shadow hover:bg-gray-50">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-white shadow hover:bg-gray-50">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/3] object-cover"
                />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  Enquire Now
                </button>
              </div>
              <div className="p-4 bg-gray-100">
                <h3 className="text-lg font-medium">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;