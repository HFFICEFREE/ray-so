import React from "react";
import { useAtom } from "jotai";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import ControlContainer from "./ControlContainer";
import { Input } from "@/components/input";
import { authorAtom, authorPositionAtom, type AuthorPosition } from "../store";
import styles from "./AuthorControl.module.css";

const POSITIONS: { value: AuthorPosition; label: string }[] = [
  { value: "bottom-right", label: "↘" },
  { value: "bottom-left", label: "↙" },
  { value: "top-right", label: "↗" },
  { value: "top-left", label: "↖" },
];

const AuthorControl: React.FC = () => {
  const [author, setAuthor] = useAtom(authorAtom);
  const [position, setPosition] = useAtom(authorPositionAtom);

  return (
    <ControlContainer title="Author">
      <div className={styles.authorRow}>
        <Input
          className={styles.authorInput}
          variant="soft"
          size="medium"
          placeholder="Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <ToggleGroup.Root
          className={styles.positionGroup}
          type="single"
          value={position}
          aria-label="Author Position"
          onValueChange={(value) => {
            if (value) setPosition(value as AuthorPosition);
          }}
        >
          {POSITIONS.map((pos) => (
            <ToggleGroup.Item
              key={pos.value}
              className={styles.positionItem}
              value={pos.value}
              aria-label={pos.value}
              title={pos.value}
            >
              {pos.label}
            </ToggleGroup.Item>
          ))}
        </ToggleGroup.Root>
      </div>
    </ControlContainer>
  );
};

export default AuthorControl;
