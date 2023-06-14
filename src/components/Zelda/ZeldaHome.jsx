import React, { useState } from "react";

import { useTheme } from "react-sheikah-ui";
import { Button } from "react-sheikah-ui";
import { Text } from "react-sheikah-ui";
import { Card } from "react-sheikah-ui";
import { DialogueCard } from "react-sheikah-ui";
import { Toast } from "react-sheikah-ui";

function ZeldaHome() {
  const theme = useTheme();

  const [showToast, toggleToast] = useState(false);
  const [toastType, setType] = useState("default");

  function handleClose() {
    toggleToast(false);
  }

  return (
    <React.Fragment>
      <div style={{ background: theme.color.uiDarkSecondary }}>
        <Button text="Click Here" onClick={() => toggleToast(!showToast)} />
        <Toast
          type={toastType}
          text={"Raw Chicken Drumstick"}
          visible={showToast}
          imageSrc={"/image.jpg"}
          visibleDuration={3000}
          onClose={handleClose}
          imageAlt={"Drumstick"}
        />
        <div>
          <Text variant="title-2" withDivider block>
            Savage Lynel Spear
          </Text>
          <Text>
            White-haired Lynels favor these brutal spears. Its axe-like
            spearhead and exceptional weight give it absolute destructive power.
          </Text>
        </div>

        <div>
          <Text>
            If you return my lost <Text color="uiCyan">Korok Seed</Text> to me,
            I can expand the size of your inventory.
          </Text>

          <Text>
            If you return my lost{" "}
            <Text color="uiCyan" block>
              Korok Seed
            </Text>{" "}
            to me, I can expand the size of your inventory.
          </Text>
        </div>

        <div>
          <Text variant="title-2" as="h1">
            Inventory
          </Text>
        </div>
        <Card withBorder style={{ padding: "1.25rem", maxWidth: 300 }}>
          <Text variant="title-2" withDivider>
            Arrow x5
          </Text>
          <Text variant="small">
            The shafts of these arrows were carved from the wood of a sturdy
            tree.
          </Text>
        </Card>
        <DialogueCard legend="Zelda">
          <Text>
            We will all be awaiting your clash with Calamity Ganon at Hyrule
            Castle.
          </Text>
        </DialogueCard>
      </div>
    </React.Fragment>
  );
}
export default ZeldaHome;
