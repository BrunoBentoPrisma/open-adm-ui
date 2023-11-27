import FormProduct from "@/app/@Form/products";

const FormEditProduct = ({ params }: { params: { id: string } }) => {
  return <FormProduct action="edit" id={params.id} />;
};

export default FormEditProduct;
