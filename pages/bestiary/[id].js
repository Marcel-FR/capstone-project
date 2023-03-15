import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const Monsters = require("../../resources/lib/5e-SRD-Monsters.json");

export default function BestiaryIdPage() {
  const [monsterData, setMonsterData] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const selectedMonster = Monsters.find((monster) => monster.index === id);
    setMonsterData(selectedMonster || {});
  }, [id]);

  const getArmorClass = () => {
    if (!monsterData?.armor_class?.length) return "";
    const { value = "", type = "" } = monsterData.armor_class[0] || {};
    return `${value}${type ? ` (${type})` : ""}`;
  };

  // The code above gets the walk, swim and hover properties from the monsterData.speed object and combines them into a single string. And if there is no speed information present in the monsterData, it returns "" as default value.

  const getSpeed = () => {
    const { walk = "", swim = "", hover = "" } = monsterData.speed || {};
    let speedString = "";
    if (walk) {
      speedString += `Walk: ${walk}`;
      if (swim || hover) speedString += ", ";
    }
    if (swim) {
      speedString += `Swim: ${swim}`;
      if (hover) speedString += ", ";
    }
    if (hover) speedString += `Hover: ${hover}`;
    return speedString || "-";
  };

  // The code above is used to create a string that represents the monster's speed information by concatenating the different walking, swimming and hovering speeds of the monster. It checks whether the monster has any speed information available and formats the output accordingly.

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{monsterData?.name || "-"}</h1>

      <Link href="/bestiary">Back</Link>

      <div className="details-item">
        <span className="item-label">Size:</span>
        <span className="item-value">{monsterData?.size || "-"}</span>
      </div>

      <div className="details-item">
        <span className="item-label">Type:</span>
        <span className="item-value">{monsterData?.type || "-"}</span>
      </div>

      <div className="details-item">
        <span className="item-label">Alignment:</span>
        <span className="item-value">{monsterData?.alignment || "-"}</span>
      </div>

      <div className="details-item">
        <span className="item-label">Armor Class:</span>
        <span className="item-value">{getArmorClass()}</span>
      </div>

      <div className="details-item">
        <span className="item-label">Hit Points:</span>
        <span className="item-value">
          {monsterData?.hit_points || "-"}
          {monsterData?.hit_dice && ` (${monsterData.hit_dice})`}
        </span>
      </div>

      <div className="details-item">
        <span className="item-label">Speed:</span>
        <span className="item-value">{getSpeed()}</span>
      </div>

      <div className="details-item">
        <span className="item-label">Strength:</span>
        <span className="item-value">{monsterData?.strength || "-"}</span>
      </div>

      <div className="details-item">
        <span className="item-label">Dexterity:</span>
        <span className="item-value">{monsterData?.dexterity || "-"}</span>
      </div>

      <div className="details-item">
        <span className="item-label">Constitution:</span>
        <span className="item-value">{monsterData?.constitution || "-"}</span>
      </div>

      <div className="details-item">
        <span className="item-label">Intelligence:</span>
        <span className="item-value">{monsterData?.intelligence || "-"}</span>
      </div>

      <div className="details-item">
        <span className="item-label">Wisdom:</span>
        <span className="item-value">{monsterData?.wisdom || "-"}</span>
      </div>

      <div className="details-item">
        <span className="item-label">Charisma:</span>
        <span className="item-value">{monsterData?.charisma || "-"}</span>
      </div>

      <div className="details-item">
        <span className="item-label">Challenge Rating:</span>
        <span className="item-value">
          {monsterData?.challenge_rating || "-"}
        </span>
      </div>
    </div>
  );
}

// This whole file has been a combination of a lot of research on the internet. It works, for now.
