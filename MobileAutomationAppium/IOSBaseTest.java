package adrianperianu;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.ios.options.XCUITestOptions;
import io.appium.java_client.service.local.AppiumDriverLocalService;
import io.appium.java_client.service.local.AppiumServiceBuilder;


public class IOSBaseTest {
	
	public IOSDriver driver;  
	public AppiumDriverLocalService service; 
	
	@BeforeClass
	public void ConfigureAppium() throws MalformedURLException
	{
	   service = new AppiumServiceBuilder().withAppiumJS(new File("//usr//local//lib//node_modules//appium//build//lib/main.js"))
                .withIPAddress("127.0.0.1").usingPort(4723).build();	
		//service.start();
	
	   XCUITestOptions options = new XCUITestOptions();
		
	   options.setDeviceName("iPhone 14 Pro");
	   options.setPlatformVersion("16.2");
	   //Appium - Webdriver Agent -> IOS Apps.
	   options.setWdaLaunchTimeout(Duration.ofSeconds(20));
	   
	   
		driver = new IOSDriver (new URL("http://127.0.0.1:4723"), options);
	
	driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));	
	}
	@AfterClass
	public void TearDown()
	{
		driver.quit();
		service.stop();
	}
	
}
