const directoryIdElement = document.querySelector<HTMLSpanElement>('#directoryId')!;
const hostnameElement = document.querySelector<HTMLSpanElement>('#hostname')!;
const serialNumberElement = document.querySelector<HTMLSpanElement>('#serialNumber')!;
const annotatedAssetIdElement = document.querySelector<HTMLSpanElement>('#annotatedAssetId')!;
const annotatedLocationElement = document.querySelector<HTMLSpanElement>('#annotatedLocation')!;
const errorElement = document.querySelector<HTMLSpanElement>('#error')!;

const buttonElement = document.querySelector<HTMLButtonElement>('#getAttributes')!;
buttonElement.addEventListener('click', async () => {
  try {
    directoryIdElement.textContent = await (navigator as any).managed.getDirectoryId();
    hostnameElement.textContent = await (navigator as any).managed.getHostname();
    serialNumberElement.textContent = await (navigator as any).managed.getSerialNumber();
    annotatedAssetIdElement.textContent = await (navigator as any).managed.getAnnotatedAssetId();
    annotatedLocationElement.textContent = await (navigator as any).managed.getAnnotatedLocation();
  } catch (e: any) {
    errorElement.textContent = e;
  }
});

