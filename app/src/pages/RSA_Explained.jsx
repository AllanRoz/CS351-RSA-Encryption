import { Box, Typography, Paper } from "@mui/material";

export default function RSA_Explained() {
  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        mt: 10,
        px: 3,
        pb: 6,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
        textAlign="center"
        color="black"
      >
        RSA Algorithm Explained
      </Typography>

      <Paper sx={{ p: 3 }}>
        {/* What is RSA */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          What is the RSA Algorithm?
        </Typography>
        <Typography mb={2}>
          RSA is an asymmetric algorithm:
          <br />• <b>Public Key</b> — used to encrypt messages
          <br />• <b>Private Key</b> — used to decrypt messages
          <br />
          Only the private key can reverse what the public key encrypts, which
          makes RSA secure.
          <br />
          <br />
          <b>Example of Asymmetric Algorithm:</b>
          <br />
          Thomas wants to send a message securely to Allan
          <br />
          So Thomas encrypts the message using Allan's Public Key
          <br />
          Then Allan decrypts the message using his Private Key
        </Typography>

        {/* Step 1 */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          1. Choose Two Prime Numbers (p and q)
        </Typography>
        <Typography mb={2}>
          RSA begins by selecting two prime numbers: <b>p</b> and <b>q</b>.
          <br />
          The primes should be large, they should also be kept secret
        </Typography>

        {/* Step 2 */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          2. Compute n = p × q
        </Typography>
        <Typography mb={2}>
          The number <b>n</b> is the modulus used for both encryption and
          decryption:
          <br />
          <code>n = p × q</code>
        </Typography>

        {/* Step 3 */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          3. Compute Euler’s Totient Function φ(n)
        </Typography>
        <Typography mb={2}>
          The totient measures how many numbers are coprime with <b>n</b>:
          <br />
          <code>φ(n) = (p − 1)(q − 1)</code>
        </Typography>

        {/* Step 4 */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          4. Choose a Encryption Exponent (e)
        </Typography>
        <Typography mb={2}>
          Pick <b>e</b> such that:
          <br />• 1 &lt; e &lt; φ(n)
          <br />• gcd(e, φ(n)) = 1
          <br />
        </Typography>

        {/* Step 5 */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          5. Compute the Decryption Exponent (d)
        </Typography>
        <Typography mb={2}>
          <b>d</b> is the modular multiplicative inverse of <b>e</b>:
          <br />
          <code>e × d ≡ 1 (mod φ(n))</code>
          <br />
        </Typography>

        {/* Step 6 */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          6. Encrypt the Message
        </Typography>
        <Typography mb={2}>
          To encrypt a message <b>M</b>:
          <br />
          <code>C = M^e mod n</code>
          <br />
          Anyone can compute this using the public key <b>(e, n)</b>.
        </Typography>

        {/* Step 7 */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          7. Decrypt the Message
        </Typography>
        <Typography mb={2}>
          To decrypt a cipher <b>C</b>:
          <br />
          <code>M = C^d mod n</code>
          <br />
          Only the private key <b>(d, n)</b> can perform this operation.
        </Typography>

        {/* Why RSA Works */}
        <Typography variant="h5" fontWeight="bold" mt={4} gutterBottom>
          Why RSA Works
        </Typography>
        <Typography mb={2}>
          RSA is based on the fact that:
          <br />• It is easy to multiply two primes.
          <br />• It is extremely difficult to factor their product.
          <br />
          <br />
          If someone does not know p and q, they cannot compute φ(n), cannot
          find d, and cannot decrypt messages.
        </Typography>
      </Paper>
    </Box>
  );
}
