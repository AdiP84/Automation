package adrianperianu;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.testng.annotations.Test;

import io.appium.java_client.AppiumBy;

public class IOS_simulator_inBuilt_Photos_app_Appium extends IOSBaseTest
{
	@Test
	
	public void IOSSwipePhotosApp() 
	{
		Map<String,String> params= new HashMap<String,String>();
		params.put("bundleId", "com.apple.mobileslideshow");
		driver.executeScript("mobile:launchApp",params);
		
		driver.findElement(AppiumBy.iOSNsPredicateString("label == 'All Photos'")).click();
		//driver.findElements(By.xpath("//XCUIElementTypeCell[@name='photo']")).size();
		List<WebElement> allPhotos = driver.findElements(AppiumBy.iOSClassChain("**/XCUIElementTypeCell"));
		System.out.println(allPhotos.size());
		driver.findElement(By.xpath("//XCUIElementTypeCell[1]")).click();
		for (int i=0; i<allPhotos.size(); i++) 
		{
		String timeStamp = driver.findElement(By.xpath("//XCUIElementTypeNavigationBar")).getAttribute("name");
		System.out.println(timeStamp);
		Map<String,Object> param = new HashMap<String,Object>();
		param.put("direction", "left");
		//param.put("element", ((RemoteWebElement)ele).getId()); // it automatically swipes from center of the screen, so this step is not required
		driver.executeScript("mobile:swipe", param);
		}
		driver.navigate().back();
		driver.findElement(AppiumBy.accessibilityId("Albums")).click();
	}
	
}