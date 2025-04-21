export async function submitForm(form: HTMLFormElement, webhookUrl: string) {
  const formData = new FormData(form);

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      body: formData, // Envio sem headers — browser define automaticamente como multipart/form-data
    });

    if (response.ok) {
      console.log("Form submission successful!");
      return true;
    } else {
      const errorText = await response.text();
      console.error("Form submission failed! status:", response.status, "text:", errorText);
      return false;
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return false;
  }
}
