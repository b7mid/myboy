<?php 
require_once 'includes/config.php';
$pageTitle = "Home";
include 'includes/header.php';
?>

<div class="container">
    <h1>Welcome to the Home Page</h1>
    <p>This is the home page of our website. You can navigate to other pages using the menu above.</p>

    <button class="btn btn-primary" onclick="location.href='about.php'">Go to About Page</button>
    <p class ="server-time">Current Server Time: <?php echo date('Y-m-d H:i:s'); ?></p>
</div>

<?php include 'includes/footer.php'; ?>

