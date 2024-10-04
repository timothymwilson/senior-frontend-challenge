import ImageMolecule from "../molecules/Image.molecule";
import logo from "../../images/Barstool-Sports-Logo-500x281.png"
import data from "../../data/form-data.json"

const FormHeader: React.FC = () => {
  return <ImageMolecule src={logo} alt={data.formData.logoAlt} caption={data.formData.title} />
}

export default FormHeader