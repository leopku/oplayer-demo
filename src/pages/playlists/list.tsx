import { Box } from "@chakra-ui/react";
import { FC, useRef } from "react";
import ReactOPlayer from "@oplayer/react";
import ui from "@oplayer/ui";
import { PlaylistPlugin } from "@oplayer/plugins";

export const PlaylistList: FC = () => {
  const playerRef = useRef(null);
  return (
    <Box w="full">
      <ReactOPlayer
        ref={playerRef}
        plugins={[
          ui(),
          new PlaylistPlugin({
            sources: [{
              src: "https://oplayer.vercel.app/君の名は.mp4",
              poster: "https://oplayer.vercel.app/poster.png",
            }],
          }),
        ]}
      />
    </Box>
  );
};
