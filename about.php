<?php

require_once 'includes/config.php';
$pageTitle = "About Us";
include 'includes/header.php';
?>

<div class="container">
    <h1>About Us</h1>
    <p>This is the about page of our website. Here you can find more information about our company and team.</p>

    <ul
        <li>Company Name: Example Corp</li>
        <li>Founded: 2020</li>
        <li>Mission: To provide excellent services to our customers.</li>
    </ul>
    <a href="index.php" class="btn btn-secondary">Back to Home</a>
    <p class="server-time">Current Server Time: <?php echo date('Y-m
-d H:i:s'); ?></p>
</div>
php include 'includes/footer.php'; ?>

