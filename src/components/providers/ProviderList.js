import { ProviderItem } from "./ProviderItem";

export const ProvidersList = ({ providerList, onDelete, onEdit }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="headerTable">
        <div
          style={{
            display: "flex",
            width: "90%",
          }}
        >
          <div className="titleFieldProvider">Company</div>
          <div className="titleFieldProvider">Firstname</div>
          <div className="titleFieldProvider">Lastname</div>
          <div className="titleFieldProvider">Phone</div>
          <div className="titleFieldProvider">Email</div>
        </div>

        <div
          style={{
            display: "flex",
            width: "10%",
          }}
        >
          Options
        </div>
      </div>

      {providerList.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          {"There are not providers"}
        </div>
      ) : (
        providerList.map((provider) => (
          <ProviderItem
            key={provider._id}
            providerToShow={provider}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
};
