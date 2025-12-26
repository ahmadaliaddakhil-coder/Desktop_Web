import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const TextFile = () => {
  const { windows } = useWindowStore();
  const windowState = windows.txtfile;

  if (!windowState || !windowState.data) return null;

  const { name, image, subtitle, description } = windowState.data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-6">
        {image && (
          <div className="mb-4">
            <img src={image} alt={name} className="max-w-full rounded" />
          </div>
        )}

        {subtitle && <p className="text-sm text-gray-500 mb-4">{subtitle}</p>}

        {Array.isArray(description) && (
          <div className="space-y-4">
            {description.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-gray-700">
                {para}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(TextFile, "txtfile");

export default TextWindow;
