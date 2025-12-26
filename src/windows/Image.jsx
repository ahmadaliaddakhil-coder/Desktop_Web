import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const ImageFile = () => {
  const { windows } = useWindowStore();
  const windowState = windows.imgfile;

  if (!windowState || !windowState.data) return null;

  const { name, imageUrl } = windowState.data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-6 flex justify-center">
        {imageUrl && (
          <img src={imageUrl} alt={name} className="max-w-full rounded" />
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(ImageFile, "imgfile");

export default ImageWindow;
