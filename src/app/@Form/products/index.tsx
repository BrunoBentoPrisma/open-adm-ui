import { IFormTypes } from "../types/form-types";

export default function FormProduct(props: IFormTypes) {
  return <p>Form action {props.action} && {props.id ?? 'sem id'}</p>;
}
