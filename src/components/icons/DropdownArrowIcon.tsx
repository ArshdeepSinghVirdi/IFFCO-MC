import * as React from "react";
import type { SVGProps } from "react";
const Component = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" {...props}><path fill={props.color || "#ED1C24"} d="M6 7L1 2h10L6 7z"/></svg>;
export default Component;