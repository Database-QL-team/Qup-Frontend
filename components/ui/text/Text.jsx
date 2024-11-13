import PropTypes from "prop-types";
import { StyledText } from "./Text.styled";

const Text = ({
  children,
  size,
  color,
  weight,
  align,
  lineHeight,
  margin,
  font,
}) => {
  return (
    <StyledText
      size={size}
      color={color}
      weight={weight}
      align={align}
      lineHeight={lineHeight}
      margin={margin}
      font={font}
    >
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  font: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  align: PropTypes.string,
  lineHeight: PropTypes.string,
  margin: PropTypes.string,
};

export default Text;
