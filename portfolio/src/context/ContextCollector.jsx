import FilteredProjectsContextWrapper from "./FilteredProjectsContextWrapper";
import InfoContextWrapper from "./InfoContextWrapper";
const ContextCollector = ({ children }) => {
  return (
    <InfoContextWrapper>
      <FilteredProjectsContextWrapper>
        {children}
      </FilteredProjectsContextWrapper>
    </InfoContextWrapper>
  );
};
export default ContextCollector;
