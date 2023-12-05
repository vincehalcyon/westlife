import Header from "@/components/_layout/partials/Header";
import globalState from "@/lib/store/globalState";
import { components } from "@/lib/services/componentService";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ParentBlock({ page, blocks = [] }) {
  const [customInitialBlocks, setCustomInitialBlocks] = useState(1);
  const { asPath } = useRouter();
  useEffect(() => {
    const elementsWithClassFullBanner =
      document.querySelectorAll(".full-banner");

    if (elementsWithClassFullBanner.length === 0) {
      setCustomInitialBlocks(2);
    }
  }, []);

  const showLazy = globalState((state) => state.showLazy);
  const activeBlocks = blocks.slice(0, customInitialBlocks);
  const lazyBlocks = blocks.slice(customInitialBlocks);
  return (
    <>
      {asPath !== "/" ? (
        <h1 className="sr-only hidden" hidden>
          {page?.name}
        </h1>
      ) : (
        ""
      )}
      <p className="sr-only hidden" hidden>
        {page?.metaData?.description}
      </p>

      {activeBlocks.map((block) => {
        const Component = components[block.key];
        return (
          <Component
            key={block.key + block?.order?.toString()}
            block={block.data}
            index={block?.order}
          />
        );
      })}
      {showLazy && (
        <>
          {lazyBlocks.map((block) => {
            const Component = components[block.key];
            return (
              <Component
                key={block.key + block?.order?.toString()}
                block={block.data}
                index={block?.order}
              />
            );
          })}
        </>
      )}
      <Header meta={page?.metaData || {}} />
    </>
  );
}
